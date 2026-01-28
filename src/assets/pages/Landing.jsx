import React from "react";


function Landing({ onNavigate }) {
    return (
        <div style={{ padding: "50px" }}>
            <h1>Welcome to My Website </h1>
            <nav style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
                <button onClick={() => onNavigate("home")}>Home</button>
                <button onClick={() => onNavigate("about")}>About</button>
                <button onClick={() => onNavigate("contact")}>Contact</button>
                <button onClick={() => onNavigate("login")}>Login</button>
                <button onClick={() => onNavigate("register")}>Register</button>
            </nav>
            <h2>Hotel California lyrics</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rem nobis alias fuga placeat quas quos eius optio ipsum vel totam, consectetur dignissimos expedita, amet ullam adipisci, deleniti id vitae?</p><br />

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et debitis incidunt neque eveniet est omnis libero sit iure illo labore, saepe adipisci vel vitae minima quaerat consequatur accusamus. Quis fugiat in numquam blanditiis similique veniam debitis quae cumque, sunt ex corporis mollitia doloremque inventore? Veritatis atque, illo molestiae minima incidunt nam iure consectetur assumenda facilis corporis eligendi nulla iste minus! Inventore reprehenderit similique, enim suscipit vel neque nulla, excepturi temporibus hic nesciunt voluptatum ab? Itaque, vitae molestias? Repellendus vel delectus veniam ut temporibus maxime reiciendis esse in ipsa amet, nihil aliquid, rem officiis. Ea deserunt mollitia aut aliquid eligendi esse. </p>

        </div>
    );
}
export default Landing;