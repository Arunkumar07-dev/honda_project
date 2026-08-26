const models = [
  { name: "Honda City", category: "Sedan", image: "assets/images/city.jpg", description: "A refined sedan concept focused on comfort and technology." },
  { name: "Honda Elevate", category: "SUV", image: "assets/images/elevate.jpg", description: "A modern SUV concept with confident design and practical space." },
  { name: "Honda Amaze", category: "Sedan", image: "assets/images/amaze.jpg", description: "A compact sedan concept designed for everyday journeys." }
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("[data-model-grid]");
  if (!grid) return;

  const render = (filter = "All") => {
    grid.innerHTML = models
      .filter(car => filter === "All" || car.category === filter)
      .map(car => `
        <article class="card">
          <div class="vehicle-thumb">
            <img src="${car.image}" alt="${car.name}" class="h-full w-full object-cover transition duration-500">
          </div>
          <div class="card-body">
            <span class="pill pill-red">${car.category}</span>
            <h3 class="mt-2 text-2xl font-bold">${car.name}</h3>
            <p class="mt-3 text-slate-600">${car.description}</p>
            <a href="vehicle-details.html?model=${encodeURIComponent(car.name)}" class="btn-primary mt-5">View Details</a>
          </div>
        </article>
      `).join("");
  };

  render();

  document.querySelectorAll("[data-filter]").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach(b => b.classList.remove("bg-red-600", "text-white"));
      button.classList.add("bg-red-600", "text-white");
      render(button.dataset.filter);
    });
  });
});