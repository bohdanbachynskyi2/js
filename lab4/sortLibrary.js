let MySortLib = {
    
    cleanUndefined: function(arr) {
        let clean = [];
        let undefinedCount = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === undefined) {
                undefinedCount++;
            } else {
                clean.push(arr[i]);
            }
        }

        if (undefinedCount > 0) {
            console.log("Увага: виявлено та пропущено undefined-елементів: " + undefinedCount);
        }

        return clean;
    },

    // Метод обміну
    bubbleSort: function(arr, ascending = true) {
        let a = this.cleanUndefined(arr);
        let comparisons = 0;
        let swaps = 0;

        for (let i = 0; i < a.length - 1; i++) {
            for (let j = 0; j < a.length - 1 - i; j++) {
                comparisons++;
                let condition = ascending ? (a[j] > a[j + 1]) : (a[j] < a[j + 1]);

                if (condition) {
                    let temp = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = temp;
                    swaps++;
                }
            }
        }

        console.log("Метод обміну (" + (ascending ? "зростання" : "спадання") + "):");
        console.log("  Порівнянь: " + comparisons + ", Переміщень: " + swaps);
        return a;
    },

    // Метод мінімальних елементів
    selectionSort: function(arr, ascending = true) {
        let a = this.cleanUndefined(arr);
        let comparisons = 0;
        let swaps = 0;

        for (let i = 0; i < a.length - 1; i++) {
            let targetIndex = i;

            for (let j = i + 1; j < a.length; j++) {
                comparisons++;
                let condition = ascending ? (a[j] < a[targetIndex]) : (a[j] > a[targetIndex]);
                if (condition) {
                    targetIndex = j;
                }
            }

            if (targetIndex !== i) {
                let temp = a[i];
                a[i] = a[targetIndex];
                a[targetIndex] = temp;
                swaps++;
            }
        }

        console.log("Метод мінімальних елементів (" + (ascending ? "зростання" : "спадання") + "):");
        console.log("  Порівнянь: " + comparisons + ", Переміщень: " + swaps);
        return a;
    },

    // Метод вставок
    insertionSort: function(arr, ascending = true) {
        let a = this.cleanUndefined(arr);
        let comparisons = 0;
        let swaps = 0;

        for (let i = 1; i < a.length; i++) {
            let current = a[i];
            let j = i - 1;

            while (j >= 0) {
                comparisons++;
                let condition = ascending ? (a[j] > current) : (a[j] < current);

                if (condition) {
                    a[j + 1] = a[j];
                    swaps++;
                    j--;
                } else {
                    break;
                }
            }
            a[j + 1] = current;
        }

        console.log("Метод вставок (" + (ascending ? "зростання" : "спадання") + "):");
        console.log("  Порівнянь: " + comparisons + ", Переміщень: " + swaps);
        return a;
    },

    // Метод Шелла
    shellSort: function(arr, ascending = true) {
        let a = this.cleanUndefined(arr);
        let comparisons = 0;
        let swaps = 0;
        let n = a.length;

        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < n; i++) {
                let temp = a[i];
                let j = i;

                while (j >= gap) {
                    comparisons++;
                    let condition = ascending ? (a[j - gap] > temp) : (a[j - gap] < temp);

                    if (condition) {
                        a[j] = a[j - gap];
                        swaps++;
                        j = j - gap;
                    } else {
                        break;
                    }
                }
                a[j] = temp;
            }
        }

        console.log("Метод Шелла (" + (ascending ? "зростання" : "спадання") + "):");
        console.log("  Порівнянь: " + comparisons + ", Переміщень: " + swaps);
        return a;
    },

    // Метод Хоара
    quickSort: function(arr, ascending = true) {
        let a = this.cleanUndefined(arr);
        let comparisons = 0;
        let swaps = 0;

        function sortHelper(left, right) {
            if (left >= right) return;

            let pivot = a[Math.floor((left + right) / 2)];
            let i = left;
            let j = right;

            while (i <= j) {
                if (ascending) {
                    while (a[i] < pivot) { comparisons++; i++; }
                    comparisons++;
                    while (a[j] > pivot) { comparisons++; j--; }
                    comparisons++;
                } else {
                    while (a[i] > pivot) { comparisons++; i++; }
                    comparisons++;
                    while (a[j] < pivot) { comparisons++; j--; }
                    comparisons++;
                }

                if (i <= j) {
                    let temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                    swaps++;
                    i++;
                    j--;
                }
            }

            if (left < j) sortHelper(left, j);
            if (i < right) sortHelper(i, right);
        }

        if (a.length > 0) {
            sortHelper(0, a.length - 1);
        }

        console.log("Метод Хоара (" + (ascending ? "зростання" : "спадання") + "):");
        console.log("  Порівнянь: " + comparisons + ", Переміщень: " + swaps);
        return a;
    }
};