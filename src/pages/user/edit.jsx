import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Form, Button, Row, Col, Card } from "bootstrap-4-react/lib/components";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";


const EditTarefa = () => {
    const [tarefa, setTarefa] = useState();
    const location = useLocation()

    const id = location?.state?.id

    async function editarTarefa(id) {
        if (id !== '') {
            const userRef = doc(db, 'gerenciadorTarefas', id)
            await getDoc(userRef).then(user => {
                setTarefa(user.data().tarefa);
            })
        }
    }

    useEffect(() => {
        editarTarefa()
    }, [])

    async function salvarEdicao(e) {
        e.preventDefault()
        try {
            const docRef = doc(db, 'gerenciadorTarefas', id)
            await updateDoc(docRef, {
                tarefa: tarefa
            }).then(() => {
                alert('Dados atualizados!')
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