function Dashboard({ onNavigate }) {
    return (
        <div style={{ padding: "20px" }}>
            <h1>Dashboard</h1>
            <p>Welcome — My Nigga Welcome to Here .</p>
            <button onClick={() => onNavigate && onNavigate("landing")} style={{ marginTop: "20px", padding: "10px 20px" }}>Logout</button>
        </div>
    );
}
export default Dashboard;
