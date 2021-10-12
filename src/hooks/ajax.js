import axios from 'axios';
import { response } from 'express';

const useAjax = (action) => {
  const api = 'https://barysevich-server-api.herokuapp.com/api/v2/todo'

  const getData = (callback) => {
    axios.get(api).then(response => {
      const allData = response.data;
      callback(allData)
    })
  }

  const addData = (data, callback) => {
    console.log('inside ajax', data);

    axios({
      method: 'post',
      url: api,
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      data: data
    }).then(response => {
      console.log('response data', response)
      const newUser = response.data;
      callback(newUser)
    }).catch(err => console.log(err))
  }

  const updateData = (id, data, callback) => {
    axios({
      method: 'put',
      url: `${api}/${id}`,
      data: data
    }).then(response => {
      const updatedData = response.data;
      callback(updateData)
    }).catch(err => console.log(err))
  }

  const deleteData = (id, callback) => {
    axios({
      method: 'delete',
      url: `${api}/${id}`
    }).then(response => {
      callback();
    }).catch(err => console.log(err))
  }

  return [getData, addData, updateData, deleteData]
}

export default useAjax;