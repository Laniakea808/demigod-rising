const filtros = document.querySelectorAll(".filtro");
const relaciones = document.querySelectorAll(".relacion");

filtros.forEach(filtro => {

    filtro.addEventListener("click", () => {

        filtros.forEach(f => f.classList.remove("active"));
        filtro.classList.add("active");

        let categoria = filtro.dataset.filter;

        relaciones.forEach(relacion => {

            if (categoria === "all") {

                relacion.style.display = "flex";

            } else {

                relacion.style.display =
                    relacion.classList.contains(categoria)
                    ? "flex"
                    : "none";

            }

        });

    });

});
