import { withCommentForm } from "./LoginForm";

function NewForm({
  comment,
  comments,
  onCommentChange,
  onSubmitComment,
  onCommentsReset,
}) {
  return (
    <div>
      <h2>Nuevo Componente de Comentarios</h2>
      <form
        onSubmit={onSubmitComment}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <textarea
          placeholder='Escribe un comentario'
          value={comment}
          onChange={onCommentChange}
        />
        <button type='submit'>Agregar Comentario</button>
      </form>
      <div>
        <h3>Comentarios anteriores:</h3>
        <button onClick={onCommentsReset}>Reset</button>
        <ul style={{ listStyle: "none" }}>
          {comments.map((c, index) => (
            <li key={index}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const NuevoComponenteConComentarios = withCommentForm(NewForm);
