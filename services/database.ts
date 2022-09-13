import { readFile, writeFile, mkdir } from 'fs/promises'

class Database<DataType extends { id?: number }> {
  private data: DataType[]
  private filepath: string
  readonly directory = './.data'

  constructor(name: string) {
    this.filepath = `${this.directory}/${name}.json`
    this.data = []
  }

  async all() {
    await this.load()
    return this.data
  }

  async find(id: DataType['id']) {
    await this.load()
    return this.data.find((data) => data.id == id)
  }

  async add(data: DataType) {
    await this.load()

    data.id = this.id()
    this.data.push(data)

    await this.save()
    return data
  }

  async update(id: number, data: DataType) {
    await this.load()

    data.id = id
    const index = this.data.indexOf(data)

    if (index >= 0) this.data[index] = data

    await this.save()
    return data
  }

  async remove(id: DataType['id']) {
    await this.load()

    this.data = this.data.filter((data) => data.id != id)

    await this.save()
  }

  private async load() {
    try {
      const content = await readFile(this.filepath)
      this.data = JSON.parse(content as any)
    } catch (error: any) {
      if (error.code != 'ENOENT') throw error
    }
  }

  private async save() {
    try {
      await writeFile(this.filepath, JSON.stringify(this.data))
    } catch (error: any) {
      if (error.code != 'ENOENT') throw error
      await mkdir(this.directory)
      await this.save()
    }
  }

  private id(): number {
    if (this.data.length == 0) return 1
    const ids = this.data.map(({ id }) => (id ? id : 0))
    return Math.max(...ids) + 1
  }
}

export default Database
