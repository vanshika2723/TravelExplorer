/* =========================
   TRAVEL EXPLORER JAVASCRIPT
========================= */


/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");

            const icon = menuToggle.querySelector("i");
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        });
    });
}


/* =========================
   DESTINATION DATA
========================= */

const destinationData = {

    jaipur: {
        title: "Royal Jaipur",
        category: "CULTURE",
        location: "Jaipur, India",
        description:
            "Discover magnificent palaces, colorful markets and the royal heritage of Rajasthan. Explore beautiful forts, traditional streets and local culture.",
        image:
            "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=85",
        duration: "4 Days / 3 Nights",
        price: "₹18,999",
        rating: "4.8 / 5"
    },

    paris: {
        title: "Magical Paris",
        category: "CITY",
        location: "Paris, France",
        description:
            "Experience iconic landmarks, beautiful streets, art and unforgettable French cuisine. Enjoy the romantic atmosphere of one of Europe's most famous cities.",
        image:
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=85",
        duration: "6 Days / 5 Nights",
        price: "₹74,999",
        rating: "4.9 / 5"
    },

    rome: {
        title: "Historic Rome",
        category: "CULTURE",
        location: "Rome, Italy",
        description:
            "Walk through ancient history and discover iconic architecture, famous landmarks and Italian culture while exploring the beautiful streets of Rome.",
        image:
            "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1000&q=85",
        duration: "5 Days / 4 Nights",
        price: "₹69,999",
        rating: "4.8 / 5"
    },

    kyoto: {
        title: "Peaceful Kyoto",
        category: "CULTURE",
        location: "Kyoto, Japan",
        description:
            "Explore ancient temples, peaceful gardens and traditional Japanese culture. Enjoy a calm and memorable experience in beautiful Kyoto.",
        image:
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=85",
        duration: "7 Days / 6 Nights",
        price: "₹89,999",
        rating: "4.9 / 5"
    },

    switzerland: {
        title: "Swiss Alps",
        category: "MOUNTAIN",
        location: "Swiss Alps, Switzerland",
        description:
            "Enjoy breathtaking mountain views, scenic villages and unforgettable alpine adventures surrounded by the beauty of Switzerland.",
        image:
            "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1000&q=85",
        duration: "8 Days / 7 Nights",
        price: "₹1,19,999",
        rating: "4.9 / 5"
    },

    goa: {
        title: "Sunny Goa",
        category: "BEACH",
        location: "Goa, India",
        description:
            "Relax on beautiful beaches, enjoy local food and experience Goa's vibrant atmosphere. Perfect for a relaxing beach holiday.",
        image:
            "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=85",
        duration: "4 Days / 3 Nights",
        price: "₹14,999",
        rating: "4.7 / 5"
    }
};


/* =========================
   DESTINATION FILTER
========================= */

const countryFilter = document.getElementById("countryFilter");
const categoryFilter = document.getElementById("categoryFilter");
const resetFilters = document.getElementById("resetFilters");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

const destinationCards =
    document.querySelectorAll(".destination-card");

const noResults = document.getElementById("noResults");


function filterDestinations() {

    const country = countryFilter
        ? countryFilter.value.toLowerCase()
        : "all";

    const category = categoryFilter
        ? categoryFilter.value.toLowerCase()
        : "all";

    const searchTerm = searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";

    let visibleCount = 0;

    destinationCards.forEach(card => {

        const cardCountry =
            card.dataset.country?.toLowerCase() || "";

        const cardCategory =
            card.dataset.category?.toLowerCase() || "";

        const cardName =
            card.dataset.name?.toLowerCase() || "";

        const matchesCountry =
            country === "all" ||
            cardCountry === country;

        const matchesCategory =
            category === "all" ||
            cardCategory === category;

        const matchesSearch =
            searchTerm === "" ||
            cardName.includes(searchTerm) ||
            cardCountry.includes(searchTerm) ||
            cardCategory.includes(searchTerm);

        if (
            matchesCountry &&
            matchesCategory &&
            matchesSearch
        ) {
            card.style.display = "";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    if (noResults) {
        noResults.hidden = visibleCount !== 0;
    }
}


if (countryFilter) {
    countryFilter.addEventListener(
        "change",
        filterDestinations
    );
}

if (categoryFilter) {
    categoryFilter.addEventListener(
        "change",
        filterDestinations
    );
}

if (searchInput) {
    searchInput.addEventListener(
        "input",
        filterDestinations
    );

    searchInput.addEventListener("keydown", event => {

        if (event.key === "Enter") {
            event.preventDefault();
            filterDestinations();

            document
                .getElementById("destinations")
                ?.scrollIntoView({
                    behavior: "smooth"
                });
        }
    });
}

if (searchButton) {
    searchButton.addEventListener("click", () => {

        filterDestinations();

        document
            .getElementById("destinations")
            ?.scrollIntoView({
                behavior: "smooth"
            });
    });
}


/* =========================
   RESET FILTERS
========================= */

if (resetFilters) {

    resetFilters.addEventListener("click", () => {

        if (countryFilter) {
            countryFilter.value = "all";
        }

        if (categoryFilter) {
            categoryFilter.value = "all";
        }

        if (searchInput) {
            searchInput.value = "";
        }

        filterDestinations();
    });
}


/* =========================
   FAVORITE BUTTONS
========================= */

const favoriteButtons =
    document.querySelectorAll(".favorite-btn");

favoriteButtons.forEach(button => {

    button.addEventListener("click", event => {

        event.stopPropagation();

        const icon = button.querySelector("i");

        if (!icon) return;

        const isFavorite =
            icon.classList.contains("fa-solid");

        if (isFavorite) {

            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");

            button.setAttribute(
                "aria-label",
                "Add to favorites"
            );

        } else {

            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");

            button.setAttribute(
                "aria-label",
                "Remove from favorites"
            );
        }
    });
});


/* =========================
   DESTINATION MODAL
========================= */

const destinationModal =
    document.getElementById("destinationModal");

const modalOverlay =
    document.getElementById("modalOverlay");

const modalClose =
    document.getElementById("modalClose");

const modalImage =
    document.getElementById("modalImage");

const modalCategory =
    document.getElementById("modalCategory");

const modalTitle =
    document.getElementById("modalTitle");

const modalLocation =
    document.getElementById("modalLocation");

const modalDescription =
    document.getElementById("modalDescription");

const modalDuration =
    document.getElementById("modalDuration");

const modalPrice =
    document.getElementById("modalPrice");

const modalRating =
    document.getElementById("modalRating");

const modalBookButton =
    document.getElementById("modalBookButton");


function openDestinationModal(destination) {

    const data = destinationData[destination];

    if (!data || !destinationModal) {
        return;
    }

    if (modalImage) {
        modalImage.src = data.image;
        modalImage.alt = data.title;
    }

    if (modalCategory) {
        modalCategory.textContent = data.category;
    }

    if (modalTitle) {
        modalTitle.textContent = data.title;
    }

    if (modalLocation) {
        modalLocation.innerHTML =
            `<i class="fa-solid fa-location-dot"></i> ${data.location}`;
    }

    if (modalDescription) {
        modalDescription.textContent =
            data.description;
    }

    if (modalDuration) {
        modalDuration.textContent =
            data.duration;
    }

    if (modalPrice) {
        modalPrice.textContent =
            data.price;
    }

    if (modalRating) {
        modalRating.textContent =
            data.rating;
    }

    destinationModal.classList.add("active");
    destinationModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";

    if (modalBookButton) {

        modalBookButton.onclick = () => {

            destinationModal.classList.remove("active");

            destinationModal.setAttribute(
                "aria-hidden",
                "true"
            );

            document.body.style.overflow = "";

            const destinationSelect =
                document.getElementById(
                    "destinationSelect"
                );

            if (destinationSelect) {

                destinationSelect.value =
                    getDestinationValue(destination);

                document
                    .getElementById("booking")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });
            }
        };
    }
}


function getDestinationValue(destination) {

    const values = {
        jaipur: "Jaipur",
        goa: "Goa",
        paris: "Paris",
        rome: "Rome",
        kyoto: "Kyoto",
        switzerland: "Swiss Alps"
    };

    return values[destination] || "";
}


/* =========================
   VIEW DETAILS BUTTONS
========================= */

const detailButtons =
    document.querySelectorAll(".details-btn");

detailButtons.forEach(button => {

    button.addEventListener("click", () => {

        const destination =
            button.dataset.destination;

        openDestinationModal(destination);
    });
});


/* =========================
   CLOSE MODAL
========================= */

function closeDestinationModal() {

    if (!destinationModal) return;

    destinationModal.classList.remove("active");

    destinationModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";
}


if (modalClose) {
    modalClose.addEventListener(
        "click",
        closeDestinationModal
    );
}

if (modalOverlay) {
    modalOverlay.addEventListener(
        "click",
        closeDestinationModal
    );
}


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        destinationModal?.classList.contains("active")
    ) {
        closeDestinationModal();
    }
});


/* =========================
   PACKAGE BUTTONS
========================= */

const packageButtons =
    document.querySelectorAll(".package-btn");

const packageSelect =
    document.getElementById("packageSelect");

packageButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedPackage =
            button.dataset.package;

        if (packageSelect) {
            packageSelect.value =
                selectedPackage;
        }

        document
            .getElementById("booking")
            ?.scrollIntoView({
                behavior: "smooth"
            });
    });
});


/* =========================
   BOOKING FORM
========================= */

const bookingForm =
    document.getElementById("bookingForm");

const formMessage =
    document.getElementById("formMessage");


if (bookingForm) {

    bookingForm.addEventListener("submit", event => {

        event.preventDefault();

        const fullName =
            document.getElementById("fullName")?.value.trim();

        const email =
            document.getElementById("email")?.value.trim();

        const destination =
            document.getElementById("destinationSelect")?.value;

        const selectedPackage =
            document.getElementById("packageSelect")?.value;

        const travelDate =
            document.getElementById("travelDate")?.value;

        const travelers =
            document.getElementById("travelers")?.value;

        if (
            !fullName ||
            !email ||
            !destination ||
            !selectedPackage ||
            !travelDate
        ) {

            if (formMessage) {
                formMessage.textContent =
                    "Please fill in all required fields.";

                formMessage.style.color =
                    "#d9534f";
            }

            return;
        }


        if (formMessage) {

            formMessage.textContent =
                `Thank you, ${fullName}! Your ${selectedPackage} trip to ${destination} for ${travelers} traveler(s) has been requested.`;

            formMessage.style.color =
                "#3b8d68";
        }

        bookingForm.reset();
    });
}


/* =========================
   SET MINIMUM TRAVEL DATE
========================= */

const travelDate =
    document.getElementById("travelDate");

if (travelDate) {

    const today =
        new Date().toISOString().split("T")[0];

    travelDate.min = today;
}


/* =========================
   INITIAL FILTER
========================= */

filterDestinations();

console.log(
    "TravelExplorer loaded successfully!"
);