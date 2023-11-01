import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Nbiot from 'App/Models/Nbiot'

export default class NbiotsController {
  public async store({ request, response }: HttpContextContract) {
    const data = request.body()

    try {
      await Nbiot.create({ data: JSON.parse(JSON.stringify(data)) })
      return response.ok({})
    } catch (error) {
      console.log(error)

      return response.badRequest()
    }
  }
}
