import React, { useEffect, useState } from "react";
import { Form, Button } from "bootstrap-4-react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const MyUser = () => {
  const [tarefa, setTarefa] = useState();
  const [tarefas, setTarefas] = useState([]);
  const [updateList, setUpdateList] = useState(false)

  const navigate = useNavigate()

  const api = 'http://localhost:3000/gerenciadorTarefas'

  async function listarTarefas() {
    try {
      await axios.get(api).then(response => {
        setTarefas(response.data)
      })
    } catch (error) {
      alert('error')
    }
  }

  useEffect(() => {
    listarTarefas();
  }, []);

  async function registrarTarefa(e) {
    e.preventDefault();
    if(tarefa === '') {
      return false
    }
    try {
      let listaTarefas = await axios.get(api)
      let lastId = parseInt(listaTarefas.data.length) + 1
      axios.post(api, {
        id: lastId,
        tarefa: tarefa
      })
      setTarefa('')
    } catch (error) {
        alert('error')
    }
  }

  async function deletar(id) {
   try {
      axios.delete(api+`${id}`)
      setUpdateList(true)
      alert('Usuario deletado!')
   } catch (error) {
      alert('error')
   }
  }

  function editarTarefa(id) {
    navigate('/edit', { state: {id: id, api: api} })
  }

  return (
    <div className="container">
      <h1>Criar tarefas</h1>
      <form onSubmit={registrarTarefa}>
        <Form.Group>
          <label htmlFor="tarefa">Nova Tarefa</label>
          <Form.Input
            type="text"
            id="tarefa"
            placeholder="Nova tarefa..."
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
          />
        </Form.Group>

        <Button primary type="submit">
          Criar Tarefa
        </Button>
      </form>
      <div className="container-table">
        <br />
        <h3>Listagem de tarefas</h3>
        <ol>
          {tarefas.map((item) => (
            <li className="lista" key={item.id}>
              {item.tarefa}
              <button onClick={() => deletar(item.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                </svg>
              </button>
              <button onClick={() => editarTarefa(item.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default MyUser;
