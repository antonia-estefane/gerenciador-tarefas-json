import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Form, Button, Row, Col, Card } from "bootstrap-4-react/lib/components";
import axios from 'axios'


const EditTarefa = () => {
    const [tarefa, setTarefa] = useState();
    const [idEdit, setIdEdit] = useState();
    const location = useLocation()

    let id = location?.state?.id
    const api = location?.state?.api

    async function editarTarefa(id) {
        try {
            if (id !== '') {
                await axios.get(api + `/${id}`).then(response => {
                    setTarefa(response.data.tarefa)
                })
                id= ''
            }
        } catch (error) {
            alert('Error')
        }
        

    }

    useEffect(() => {
        editarTarefa()
        setIdEdit(id)
    }, [])

    async function salvarEdicao(e) {
        e.preventDefault()
        try {
            axios.put(api + `/${idEdit}`, {
                id: idEdit,
                tarefa: tarefa
            }).then(reponse => {
                alert('Dados atualizados!')
                setTarefa(reponse.data.tarefa)
            })
        } catch (error) {
            alert('Erro ao atualizar dados!')
        }
    }

    return(
        <>
            <div className="container">
            <h1>Editar tarefa  </h1>
            <form >
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

                <Button onClick={e => salvarEdicao(e)} primary type="submit">
                Atualizar
                </Button>
            </form>
            </div>

        </>
    )
}

export default EditTarefa