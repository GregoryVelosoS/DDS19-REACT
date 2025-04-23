// Importação dos componentes do Bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import styles from "./Cadastro.module.css";
import Button from "react-bootstrap/Button";

// Importação do hook do React Hook Form para lidar com o formulário
import { useForm } from "react-hook-form";

import { editarFuncionario } from "../hooks/useApi";
const Editar = () => {
  // Hook useForm para gerenciar o estado do formulário
  // register: função para registrar os campos do formulário
  // handleSubmit: função para lidar com o envio do formulário
  // formState: objeto que contém o estado do formulário, incluindo erros
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Função chamada quando o formulário  é enviado com sucesso
  const onSubmit = (data) => {
    console.log("Dados:", data);
    editarFuncionario(data);
    alert("Funcionario editado");
    window.location.reload();
  };

  // Função chamada quando há erros no envio do formulário
  const onError = (errors) => {
    console.log("Erros:", errors);
  };

  return (
    <div>
      <h1>Editar</h1>
      <form
        className={styles.formulario}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        {/* Caixinha de id */}
        <FloatingLabel
          controlId="floatingInputId"
          label="Id"
          className="mb-4 w-100"
        >
          <Form.Control
            size="sm"
            type="text"
            placeholder=""
            {...register("id", {
              required: "O id é obrigatório",
              minLength: {
                value: 1,
                message: "O id deve ter pelo menos 1 caracter",
              }
            })}
          />
          {errors.id && <p className={styles.error}>{errors.id.message}</p>}
        </FloatingLabel>

        {/* Caixinha de nome */}
        <FloatingLabel
          controlId="floatingInputNome"
          label="Nome"
          className="mb-4 w-100"
        >
          <Form.Control
            size="sm"
            type="text"
            placeholder=""
            {...register("nome", {
              required: "O nome é obrigatório",
              minLength: {
                value: 2,
                message: "O nome deve ter pelo menos 2 caracteres",
              },
              maxLength: {
                value: 20,
                message: "O nome deve ter ate 20 caracteres",
              },
              pattern: {
                value: /^[A-Za-z\s]+$/i,
                message: "O nome só pode conter letras",
              },
            })}
          />
          {errors.nome && <p className={styles.error}>{errors.nome.message}</p>}
        </FloatingLabel>

        {/* Caixinha de email */}
        <FloatingLabel
          controlId="floatingInputEmail"
          label="Email:"
          className="mb-4 w-100"
        >
          <Form.Control
            size="sm"
            type="email"
            placeholder=""
            {...register("email", {
              required: "O email é obrigatório",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Email inválido",
              },
              validate: (value) => value.includes("@") || "Email inválido",
            })}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </FloatingLabel>

        {/* Caixinha de Senha */}
        <FloatingLabel
          controlId="floatingPassword"
          label="Senha"
          className="mb-4 w-100"
        >
          <Form.Control
            type="password"
            placeholder=""
            {...register("senha", {
              required: "A senha é obrigatória",
              minLength: {
                value: 1,
                message: "A senha deve ter pelo menos 1 caracteres",
              },
              maxLength: {
                value: 20,
                message: "A senha deve ter menos de 20 caracteres",
              },
              //Comentar essa parte para não validar a senha
              // pattern: {
              //   value:
              //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              //   message:
              //     "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial",
              // },
            })}
          />
          {errors.senha && (
            <p className={styles.error}>{errors.senha.message}</p>
          )}
        </FloatingLabel>

        {/* Caixinha select */}
        <FloatingLabel
          controlId="floatingSelect"
          label="Tipo de usuário"
          className="mb-4 w-100 text-center"
        >
          <Form.Select {...register("tipo")}>
            <option value="Administrador">Administrador</option>
            <option value="Funcionário">Funcionário</option>
            <option value="Gerente">Gerente</option>
          </Form.Select>
          {errors.tipo && <p className={styles.error}>{errors.tipo.message}</p>}
        </FloatingLabel>

        <Button
          as="input"
          type="submit"
          value="Editar"
          className="mb-4 w-30 mx-auto"
        />
      </form>
    </div>
  );
};

export default Editar;
