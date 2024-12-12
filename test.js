const storedHashedPassword = '$2b$10$FJw5bUXZr4EfEyRGX5k4k.i4rcGf92HzB65PCmdgb.JVjwszVZLI2';
const userInputPassword = 'myPasswordIsSafeNow9';

bcrypt.compare(userInputPassword, storedHashedPassword, (err, result) => {
    if (err) {
        // Handle error
        console.error('Error comparing passwords:', err);
        return;
    }

if (result) {
    // Passwords match, authentication successful
    console.log('Passwords match! User authenticated.');
} else {
    // Passwords don't match, authentication failed
    console.log('Passwords do not match! Authentication failed.');
}
});