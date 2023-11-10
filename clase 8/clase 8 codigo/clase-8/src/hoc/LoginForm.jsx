import { useState } from "react";

// HOC para manejar el estado de un formulario de comentarios
export function withCommentForm(Component) {
  function CommentFormHOC() {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const handleCommentChange = (e) => {
      setComment(e.target.value);
    };

    const handleCommentsReset = () => {
      setComments([]);
    };

    const handleSubmitComment = (e) => {
      e.preventDefault();

      if (comment.trim() === "") {
        return; // No permitir comentarios vacíos
      }

      // Agregar el comentario a la lista de comentarios
      setComments([...comments, comment]);

      // Limpiar el campo de comentario
      setComment("");
    };

    return (
      <Component
        comment={comment}
        comments={comments}
        onCommentChange={handleCommentChange}
        onCommentsReset={handleCommentsReset}
        onSubmitComment={handleSubmitComment}
      />
    );
  }

  return CommentFormHOC;
}

// Componente de comentarios
function CommentForm({
  comment,
  comments,
  onCommentChange,
  onSubmitComment,
  onCommentsReset, // Agregar la prop de reinicio
}) {
  return (
    <div>
      <h2>Comentarios</h2>
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
        {/* Botón de reinicio */}
        <ul style={{ listStyle: "none" }}>
          {comments.map((c, index) => (
            <li key={index}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Aplicando el HOC al componente de comentarios
export const CommentFormWithState = withCommentForm(CommentForm);
