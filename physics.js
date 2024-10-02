function getAcceleration(properties) {
    const { f, m, Δv, Δt, d, t } = properties;
    
    // Check if force and mass are provided
    if (f !== undefined && m !== undefined && m !== 0) {
        return f / m; // Using a = F/m
    }
    
    // Check if change in velocity and change in time are provided
    if (Δv !== undefined && Δt !== undefined && Δt !== 0) {
        return Δv / Δt; // Using a = Δv/Δt
    }
    
    // Check if distance and time are provided
    if (d !== undefined && t !== undefined && t !== 0) {
        return (2 * d) / (t ** 2); // Using a = 2d/t^2
    }
    
    // If none of the calculations can be performed
    return "impossible";
}

// Example usage
console.log(getAcceleration({ f: 10, m: 5 })); // Outputs: 2
console.log(getAcceleration({ Δv: 100, Δt: 50 })); // Outputs: 2
console.log(getAcceleration({ d: 10, t: 1 })); // Outputs: 20
console.log(getAcceleration({})); // Outputs: impossible
