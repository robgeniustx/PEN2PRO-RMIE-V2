import client from './client'

export const intakeApi = {
  submit: (intakeData) =>
    client.post('/api/intake', intakeData),

  getById: (id) =>
    client.get(`/api/intake/${id}`),

  getUserIntakes: () =>
    client.get('/api/intake/me'),
}

export default intakeApi
