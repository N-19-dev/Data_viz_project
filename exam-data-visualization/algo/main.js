function twoSum(nums, target) {
    const numIndices = {}; // Dictionnaire pour stocker les valeurs et leurs indices
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        // Vérifie si le complément est déjà dans le dictionnaire
        if (numIndices[complement] !== undefined) {
            return [numIndices[complement], i];
        }
        
        // Stocke l'indice de la valeur actuelle dans le dictionnaire
        numIndices[nums[i]] = i;
    }
    
    // Retourne une exception si aucune solution n'est trouvée
    throw new Error("Aucune solution trouvée");
}

// Exemple d'utilisation
const nums = [3,2,4];
const target = 6;
console.log(twoSum(nums, target)); 
