import Image from "next/image";

export default function AuthorDetails({ user }) {
  return (
    <div className="col-12 text-start">
      <div className="card rounded-3">
        <div className="card-header">
          <h5 className="mb-0">Author details</h5>
        </div>
        <div className="card-body d-flex align-items-center flex-wrap gap-3">
          <div>
            <Image
              width="100"
              height="100"
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt={user.name}
            />
          </div>
          <div>
            <div className="d-flex align-items-center gap-2">
              <h6 className="mb-0">{user.name}</h6>
              <small className="text-muted">@{user.username}</small>
            </div>
            <ul>
              <li className="mb-0">{user.email}</li>
              <li className="mb-0">{user.phone}</li>
              <li className="mb-0">{user.website}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
