// Importação dos componentes do Bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import styles from "./Cadastro.module.css";
import Button from "react-bootstrap/Button";

// Importação do hook do React Hook Form para lidar com o formulário

import { useForm } from "react-hook-form";
  // Hook useForm para gerenciar o estado do formulário
  // register: função para registrar os campos do formulário
  // handleSubmit: função para lidar com o envio do formulário
  // formState: objeto que contém o estado do formulário, incluindo erros
const Excluir = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Função chamada quando o formulário é enviado com sucesso
  const onSubmit = (data) => {
    console.log("Dados:", data);
  };

  // Função chamada quando há erros no envio do formulário
  const onError = (errors) => {
    console.log("Erros:", errors);
  };

return (
    <div >
        <h1>Excluir</h1>
        <form
            className={styles.formulario}
            onSubmit={handleSubmit(onSubmit, onError)}
        >
            {/* Caixinha de nome */}
            <FloatingLabel
                controlId="floatingInputId"
                label="Id"
                className="mb-3 w-100"
            >
                <Form.Control
                    size="lg"
                    type="text"
                    placeholder=""
                    {...register("id", {
                        required: "O id é obrigatório",
                        minLength: {
                            value: 1,
                            message: "O id deve ter pelo menos 1 caractere",
                        },
                        pattern: {
                            value: /^[A-Za-z0-9]+$/i,
                            message: "O id só pode conter letras e números",
                        },
                    })}
                />
                {errors.nome && <p className={styles.error}>{errors.nome.message}</p>}
            </FloatingLabel>
            <Button
                as="input"
                type="submit"
                value="Excluir"
                className="mb-3 w-30 mx-auto"
            />
        </form>
    </div>
);
};

export default Excluir;
