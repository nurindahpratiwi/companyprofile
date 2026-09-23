export default function UserCard({ user }) {
    return (
        <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.company.name}</p>  
        </div>
    );
}