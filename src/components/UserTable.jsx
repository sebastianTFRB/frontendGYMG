// src/components/UserTable.jsx
export default function UserTable({ users, onDelete }) {
  if (!users.length) {
    return <p className="text-center mt-4">No hay usuarios</p>;
  }

  return (
    <table className="table table-bordered mt-3">
      <thead className="table-light">
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>
              <button className="btn btn-warning btn-sm me-2">Editar</button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(u.id)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
