/* =========================
   TRAVELEXPLORER
   Interactive JavaScript
========================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       ELEMENTS
    ========================= */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    const countryFilter = document.getElementById("countryFilter");
    const categoryFilter = document.getElementById("categoryFilter");
    const resetFilters = document.getElementById("resetFilters");

    const destinationGrid =
        document.getElementById("destinationGrid");

    const destinationCards =
        document.querySelectorAll(".destination-card");

    const noResults =
        document.getElementById("noResults");

    const favoriteButtons =
        document.querySelectorAll(".favorite-btn");

    const detailButtons =
        document.querySelectorAll(".details-btn");

    const packageButtons =
        document.querySelectorAll(".package-btn");

    const bookingForm =
        document.getElementById("bookingForm");

    const destinationSelect =
        document.getElementById("destinationSelect");

    const packageSelect =
        document.getElementById("packageSelect");

    const travelDate =
        document.getElementById("travelDate");

    const formMessage =
        document.getElementById("formMessage");


    /* =========================
       MOBILE MENU
    ========================= */

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


        navLinks.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                const icon = menuToggle.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

    }


    /* =========================
       SEARCH + FILTER
    ========================= */

    function filterDestinations() {

        const searchValue =
            searchInput.value.trim().toLowerCase();

        const selectedCountry =
            countryFilter.value.toLowerCase();

        const selectedCategory =
            categoryFilter.value.toLowerCase();

        let visibleCount = 0;


        destinationCards.forEach((card) => {

            const name =
                card.dataset.name.toLowerCase();

            const country =
                card.dataset.country.toLowerCase();

            const category =
                card.dataset.category.toLowerCase();


            const matchesSearch =
                name.includes(searchValue);

            const matchesCountry =
                selectedCountry === "all" ||
                country === selectedCountry;

            const matchesCategory =
                selectedCategory === "all" ||
                category === selectedCategory;


            if (
                matchesSearch &&
                matchesCountry &&
                matchesCategory
            ) {

                card.classList.remove("hidden");

                visibleCount++;

            } else {

                card.classList.add("hidden");

            }

        });


        if (visibleCount === 0) {

            noResults.hidden = false;

        } else {

            noResults.hidden = true;

        }

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterDestinations
        );

    }


    if (searchButton) {

        searchButton.addEventListener("click", () => {

            filterDestinations();

            document
                .getElementById("destinations")
                .scrollIntoView({
                    behavior: "smooth"
                });

        });

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


    /* =========================
       RESET FILTERS
    ========================= */

    if (resetFilters) {

        resetFilters.addEventListener("click", () => {

            searchInput.value = "";

            countryFilter.value = "all";

            categoryFilter.value = "all";

            filterDestinations();

        });

    }


    /* =========================
       FAVORITE BUTTONS
    ========================= */

    favoriteButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const icon = button.querySelector("i");

            button.classList.toggle("active");


            if (button.classList.contains("active")) {

                icon.classList.remove("fa-regular");
                icon.classList.add("fa-solid");

            } else {

                icon.classList.remove("fa-solid");
                icon.classList.add("fa-regular");

            }

        });

    });


    /* =========================
       DESTINATION DATA
    ========================= */

    const destinations = {

        jaipur: {
            title: "Royal Jaipur",
            location: "Jaipur, India",
            category: "CULTURE",
            image:
                "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=85",
            description:
                "Discover magnificent palaces, colorful markets and the royal heritage of Rajasthan. Explore historic forts, traditional food and vibrant local culture.",
            duration: "5 Days / 4 Nights",
            price: "₹18,999 per person",
            rating: "4.8 / 5"
        },

        paris: {
            title: "Magical Paris",
            location: "Paris, France",
            category: "CITY",
            image:
                "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=85",
            description:
                "Experience iconic landmarks, beautiful streets, art galleries and unforgettable French cuisine in one of the world's most visited cities.",
            duration: "6 Days / 5 Nights",
            price: "₹74,999 per person",
            rating: "4.9 / 5"
        },

        rome: {
            title: "Historic Rome",
            location: "Rome, Italy",
            category: "CULTURE",
            image:
                "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1000&q=85",
            description:
                "Walk through ancient history and discover iconic architecture, Roman landmarks, traditional Italian cuisine and fascinating cultural experiences.",
            duration: "6 Days / 5 Nights",
            price: "₹69,999 per person",
            rating: "4.8 / 5"
        },

        kyoto: {
            title: "Peaceful Kyoto",
            location: "Kyoto, Japan",
            category: "CULTURE",
            image:
                "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=85",
            description:
                "Explore ancient temples, peaceful gardens, traditional neighborhoods and the timeless cultural heritage of Japan.",
            duration: "7 Days / 6 Nights",
            price: "₹89,999 per person",
            rating: "4.9 / 5"
        },

        switzerland: {
            title: "Swiss Alps",
            location: "Swiss Alps, Switzerland",
            category: "MOUNTAIN",
            image:
                "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1000&q=85",
            description:
                "Enjoy breathtaking mountain views, scenic villages, fresh alpine air and unforgettable adventures surrounded by the Swiss Alps.",
            duration: "8 Days / 7 Nights",
            price: "₹1,19,999 per person",
            rating: "5.0 / 5"
        },

        goa: {
            title: "Sunny Goa",
            location: "Goa, India",
            category: "BEACH",
            image:
                "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=85",
            description:
                "Relax on beautiful beaches, enjoy delicious local food and experience Goa's vibrant atmosphere, nightlife and coastal lifestyle.",
            duration: "4 Days / 3 Nights",
            price: "₹14,999 per person",
            rating: "4.7 / 5"
        }

    };


    /* =========================
       MODAL ELEMENTS
    ========================= */

    const modal =
        document.getElementById("destinationModal");

    const modalOverlay =
        document.getElementById("modalOverlay");

    const modalClose =
        document.getElementById("modalClose");

    const modalImage =
        document.getElementById("modalImage");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalCategory =
        document.getElementById("modalCategory");

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


    /* =========================
       OPEN DESTINATION MODAL
    ========================= */

    function openDestinationModal(destinationId) {

        const destination =
            destinations[destinationId];

        if (!destination) {
            return;
        }


        modalImage.src = destination.image;
        modalImage.alt = destination.title;

        modalTitle.textContent =
            destination.title;

        modalCategory.textContent =
            destination.category;

        modalLocation.textContent =
            destination.location;

        modalDescription.textContent =
            destination.description;

        modalDuration.textContent =
            destination.duration;

        modalPrice.textContent =
            destination.price;

        modalRating.textContent =
            destination.rating;


        modal.classList.add("active");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add("modal-open");

    }


    /* =========================
       CLOSE MODAL
    ========================= */

    function closeDestinationModal() {

        modal.classList.remove("active");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove("modal-open");

    }


    detailButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const destinationId =
                button.dataset.destination;

            openDestinationModal(destinationId);

        });

    });


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
       ESC KEY - CLOSE MODAL
    ========================= */

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {

            closeDestinationModal();

        }

    });


    /* =========================
       MODAL BOOK BUTTON
    ========================= */

    if (modalBookButton) {

        modalBookButton.addEventListener("click", () => {

            closeDestinationModal();

            document
                .getElementById("booking")
                .scrollIntoView({
                    behavior: "smooth"
                });

        });

    }


    /* =========================
       PACKAGE SELECTION
    ========================= */

    packageButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const selectedPackage =
                button.dataset.package;

            packageSelect.value =
                selectedPackage;


            document
                .getElementById("booking")
                .scrollIntoView({
                    behavior: "smooth"
                });


            packageSelect.focus();

        });

    });


    /* =========================
       BOOKING FORM
    ========================= */

    if (bookingForm) {

        bookingForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const fullName =
                    document
                        .getElementById("fullName")
                        .value
                        .trim();

                const email =
                    document
                        .getElementById("email")
                        .value
                        .trim();

                const destination =
                    destinationSelect.value;

                const selectedPackage =
                    packageSelect.value;

                const date =
                    travelDate.value;


                if (
                    !fullName ||
                    !email ||
                    !destination ||
                    !selectedPackage ||
                    !date
                ) {

                    formMessage.textContent =
                        "Please fill in all required fields.";

                    formMessage.className =
                        "form-message";

                    return;

                }


                /* Validate travel date */

                const today =
                    new Date();

                today.setHours(0, 0, 0, 0);

                const selectedDate =
                    new Date(date + "T00:00:00");


                if (selectedDate < today) {

                    formMessage.textContent =
                        "Please select a future travel date.";

                    formMessage.className =
                        "form-message";

                    return;

                }


                /* Success message */

                formMessage.textContent =
                    `Thank you, ${fullName}! Your ${selectedPackage} package request for ${destination} has been submitted successfully.`;

                formMessage.className =
                    "form-message success";


                bookingForm.reset();

            }
        );

    }


    /* =========================
       SET MINIMUM TRAVEL DATE
    ========================= */

    if (travelDate) {

        const today =
            new Date();

        const year =
            today.getFullYear();

        const month =
            String(today.getMonth() + 1)
                .padStart(2, "0");

        const day =
            String(today.getDate())
                .padStart(2, "0");


        travelDate.min =
            `${year}-${month}-${day}`;

    }


    /* =========================
       INITIAL FILTER
    ========================= */

    filterDestinations();

});