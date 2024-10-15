      // Ring data
      const rings = [
        { name: "Pink Sapphire Ring", image: "ring5.jpg", price: 8999 },
        { name: "Blue Sapphire Gold Ring", image: "ring1.jpg", price: 12999 },
        { name: "RoseGold Sapphire Ring", image: "ring4.jpg", price: 9999 },
        { name: "Ruby Ring", image: "ring6.jpg", price: 7999 },
        { name: "Emerald King Ring", image: "ring3.jpg", price: 5999 },
        { name: "Yellow 24k Gold Ring", image: "ring2.jpg", price: 6999 }
    ];

    // Function to display rings
    function displayRings(ringsToDisplay) {
        const container = document.getElementById('ringsContainer');
        container.innerHTML = '';
        
        ringsToDisplay.forEach(ring => {
            const ringElement = `
                <div class="col-md-4">
                    <div class="ring-card">
                        <img src="${ring.image}" alt="${ring.name}" class="ring-image">
                        <div class="ring-details">
                            <h3 class="ring-title">${ring.name}</h3>
                            <p class="ring-price">$ ${ring.price.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += ringElement;
        });
    }

    // Function to sort rings
    function sortRings(sortOrder) {
        const sortedRings = [...rings];
        if (sortOrder === 'low-to-high') {
            sortedRings.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'high-to-low') {
            sortedRings.sort((a, b) => b.price - a.price);
        }
        displayRings(sortedRings);
    }

    // Search Functionality
    document.getElementById('search-input').addEventListener('keyup', function() {
        let filter = this.value.toLowerCase();
        let filteredRings = rings.filter(ring => ring.name.toLowerCase().includes(filter));

        displayRings(filteredRings); // Display the filtered rings
    });

    // Initial display
    document.addEventListener('DOMContentLoaded', () => {
        displayRings(rings);
    });


        // Earrings data
        const earrings = [
            { name: "Diamond Rose Gold Earrings", image: "ear1.jpg", price: 14999 },
            { name: "Pink Sapphire Earrings", image: "ear2.jpg", price: 13999 },
            { name: "Blue Sapphire Midnight Earrings", image: "ear3.jpg", price: 17999 },
            { name: "Emerald Stud Earrings", image: "ear4.jpg", price: 9999 },
            { name: "Blue Sapphire Pearl Drop Earrings", image: "ear5.jpg", price: 15999 },
            { name: "Trichromatic Knot Earrings", image: "ear6.jpg", price: 18999 }
        ];

        // Function to display earrings
        function displayEarrings(earringsToDisplay) {
            const container = document.getElementById('earringsContainer');
            container.innerHTML = '';
            
            earringsToDisplay.forEach(earring => {
                const earringElement = `
                    <div class="col-md-4">
                        <div class="earring-card">
                            <img src="${earring.image}" alt="${earring.name}" class="earring-image">
                            <div class="earring-details">
                                <h3 class="earring-title">${earring.name}</h3>
                                <p class="earring-price">$ ${earring.price.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += earringElement;
            });
        }

        // Function to sort earrings
        function sortEarrings(sortOrder) {
            const sortedEarrings = [...earrings];
            if (sortOrder === 'low-to-high') {
                sortedEarrings.sort((a, b) => a.price - b.price);
            } else if (sortOrder === 'high-to-low') {
                sortedEarrings.sort((a, b) => b.price - a.price);
            }
            displayEarrings(sortedEarrings);
        }

        // Search Functionality
        document.getElementById('search-input').addEventListener('keyup', function() {
            let filter = this.value.toLowerCase();
            let filteredEarrings = earrings.filter(earring => earring.name.toLowerCase().includes(filter));

            displayEarrings(filteredEarrings); // Display the filtered earrings
        });

        // Initial display
        document.addEventListener('DOMContentLoaded', () => {
            displayEarrings(earrings);
        });

        // Bangles data
        const bangles = [
            { name: "Yellow Gold Bangle", image: "bangle1.jpg", price: 5999 },
            { name: "White Gold Diamond Bracelet", image: "bangle2.jpg", price: 14999 },
            { name: "Rainbow Sapphire Bracelet", image: "bangle3.jpg", price: 12999 },
            { name: "All Stone Bracelet", image: "bangle4.jpg", price: 17999 },
            { name: "Rose Gold Diamond Bracelet", image: "bangle5.jpg", price: 19999 },
            { name: "Yellow Gold Bangles Bracelet", image: "bangle6.jpg", price: 8999 }
        ];

        // Function to display bangles
        function displayBangles(banglesToDisplay) {
            const container = document.getElementById('banglesContainer');
            container.innerHTML = '';
            
            banglesToDisplay.forEach(bangle => {
                const bangleElement = `
                    <div class="col-md-4">
                        <div class="bangle-card">
                            <img src="${bangle.image}" alt="${bangle.name}" class="bangle-image">
                            <div class="bangle-details">
                                <h3 class="bangle-title">${bangle.name}</h3>
                                <p class="bangle-price">$ ${bangle.price.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += bangleElement;
            });
        }

        // Function to sort bangles
        function sortBangles(sortOrder) {
            const sortedBangles = [...bangles];
            if (sortOrder === 'low-to-high') {
                sortedBangles.sort((a, b) => a.price - b.price);
            } else if (sortOrder === 'high-to-low') {
                sortedBangles.sort((a, b) => b.price - a.price);
            }
            displayBangles(sortedBangles);
        }

        // Search Functionality
        document.getElementById('search-input').addEventListener('keyup', function() {
            let filter = this.value.toLowerCase();
            let filteredBangles = bangles.filter(bangle => bangle.name.toLowerCase().includes(filter));

            displayBangles(filteredBangles); // Display the filtered bangles
        });

        // Initial display
        document.addEventListener('DOMContentLoaded', () => {
            displayBangles(bangles);
        });

        // Necklace data
        const necklaces = [
            { name: "Diamond Rose Gold Solitaire Necklace", image: "neck1.jpg", price: 24999 },
            { name: "All Stone Necklace", image: "neck2.jpg", price: 19999 },
            { name: "Monarch Gold Necklace", image: "neck3.jpg", price: 29999 },
            { name: "Diamond Rose Gold Necklace", image: "neck4.jpg", price: 21999 },
            { name: "Diamond Gold Necklace", image: "neck5.jpg", price: 17999 },
            { name: "Diamond Rose Gold V Necklace", image: "neck6.jpg", price: 18999 }
        ];

        // Function to display necklaces
        function displayNecklaces(necklacesToDisplay) {
            const container = document.getElementById('necklacesContainer');
            container.innerHTML = '';
            
            necklacesToDisplay.forEach(necklace => {
                const necklaceElement = `
                    <div class="col-md-4">
                        <div class="necklace-card">
                            <img src="${necklace.image}" alt="${necklace.name}" class="necklace-image">
                            <div class="necklace-details">
                                <h3 class="necklace-title">${necklace.name}</h3>
                                <p class="necklace-price">$ ${necklace.price.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += necklaceElement;
            });
        }

        // Function to sort necklaces
        function sortNecklaces(sortOrder) {
            const sortedNecklaces = [...necklaces];
            if (sortOrder === 'low-to-high') {
                sortedNecklaces.sort((a, b) => a.price - b.price);
            } else if (sortOrder === 'high-to-low') {
                sortedNecklaces.sort((a, b) => b.price - a.price);
            }
            displayNecklaces(sortedNecklaces);
        }

        // Search Functionality
        document.getElementById('search-input').addEventListener('keyup', function() {
            let filter = this.value.toLowerCase();
            let filteredNecklaces = necklaces.filter(necklace => necklace.name.toLowerCase().includes(filter));

            displayNecklaces(filteredNecklaces); // Display the filtered necklaces
        });

        // Initial display
        document.addEventListener('DOMContentLoaded', () => {
            displayNecklaces(necklaces);
        });

        // Cufflinks data
        const cufflinks = [
            { name: "Trichromatic Knot Cufflinks", image: "cuff1.jpg", price: 2999 },
            { name: "Silver Sapphire Cufflinks", image: "cuff2.jpg", price: 3999 },
            { name: "Silver Sapphire Pearl Cufflinks", image: "cuff3.jpg", price: 5999 },
            { name: "Sapphire Wheel Cufflinks", image: "cuff4.jpg", price: 4999 },
            { name: "Emerald Pinkish Cufflinks", image: "cuff5.jpg", price: 999 },
            { name: "Blue Sun Sapphire Cufflinks", image: "cuff6.jpg", price: 1999 }
        ];

        // Function to display cufflinks
        function displayCufflinks(cufflinksToDisplay) {
            const container = document.getElementById('cufflinksContainer');
            container.innerHTML = '';
            
            cufflinksToDisplay.forEach(cufflink => {
                const cufflinkElement = `
                    <div class="col-md-4">
                        <div class="cufflink-card">
                            <img src="${cufflink.image}" alt="${cufflink.name}" class="cufflink-image">
                            <div class="cufflink-details">
                                <h3 class="cufflink-title">${cufflink.name}</h3>
                                <p class="cufflink-price">$ ${cufflink.price.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += cufflinkElement;
            });
        }

        // Function to sort cufflinks
        function sortCufflinks(sortOrder) {
            const sortedCufflinks = [...cufflinks];
            if (sortOrder === 'low-to-high') {
                sortedCufflinks.sort((a, b) => a.price - b.price);
            } else if (sortOrder === 'high-to-low') {
                sortedCufflinks.sort((a, b) => b.price - a.price);
            }
            displayCufflinks(sortedCufflinks);
        }

        // Search Functionality
        document.getElementById('search-input').addEventListener('keyup', function() {
            let filter = this.value.toLowerCase();
            let filteredCufflinks = cufflinks.filter(cufflink => cufflink.name.toLowerCase().includes(filter));

            displayCufflinks(filteredCufflinks); // Display the filtered cufflinks
        });

        // Initial display
        document.addEventListener('DOMContentLoaded', () => {
            displayCufflinks(cufflinks);
        });

        // Pendants data
        const pendants = [
            { name: "Diamond Heart Pendant", image: "pen1.jpg", price: 4999 },
            { name: "Diamond Rose Gold Cross Pendant", image: "pen2.jpg", price: 8999 },
            { name: "Diamond Gold Cross Pendant", image: "pen3.jpg", price: 9999 },
            { name: "Sapphire Thailand Pendant", image: "pen4.jpg", price: 5999 },
            { name: "Gold Sri Lankan Pendant", image: "pen5.jpg", price: 7999 },
            { name: "Sapphire Diamond Pendant", image: "pen6.jpg", price: 6999 }
        ];

        // Function to display pendants
        function displayPendants(pendantsToDisplay) {
            const container = document.getElementById('pendantsContainer');
            container.innerHTML = '';
            
            pendantsToDisplay.forEach(pendant => {
                const pendantElement = `
                    <div class="col-md-4">
                        <div class="pendant-card">
                            <img src="${pendant.image}" alt="${pendant.name}" class="pendant-image">
                            <div class="pendant-details">
                                <h3 class="pendant-title">${pendant.name}</h3>
                                <p class="pendant-price">$ ${pendant.price.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += pendantElement;
            });
        }

        // Function to sort pendants
        function sortPendants(sortOrder) {
            const sortedPendants = [...pendants];
            if (sortOrder === 'low-to-high') {
                sortedPendants.sort((a, b) => a.price - b.price);
            } else if (sortOrder === 'high-to-low') {
                sortedPendants.sort((a, b) => b.price - a.price);
            }
            displayPendants(sortedPendants);
        }

        // Search Functionality
        document.getElementById('search-input').addEventListener('keyup', function() {
            let filter = this.value.toLowerCase();
            let filteredPendants = pendants.filter(pendant => pendant.name.toLowerCase().includes(filter));

            displayPendants(filteredPendants); // Display the filtered pendants
        });

        // Initial display
        document.addEventListener('DOMContentLoaded', () => {
            displayPendants(pendants);
        });