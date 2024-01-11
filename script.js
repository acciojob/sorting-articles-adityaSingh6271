//your JS code here. If required.
   const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

        // Function to sort the bands without considering specified words
        const sortBands = (bands) => {
            return bands.sort((a, b) => {
                // Helper function to remove specified words and get clean string for comparison
                const cleanString = (str) => str.replace(/^(a|an|the) /i, '').trim();
                return cleanString(a) > cleanString(b) ? 1 : -1;
            });
        };

        // Get sorted bands
        const sortedBands = sortBands(bands);

        // Populate the unordered list with sorted bands
        const bandList = document.getElementById('band');
        sortedBands.forEach(band => {
            const listItem = document.createElement('li');
            listItem.textContent = band;
            bandList.appendChild(listItem);
        });