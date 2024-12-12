import bcrypt from 'bcrypt'
import { User } from './server/models/user.model'

const data = User.findOne({
  name: "John",
})

const storedHashedPassword = data.password;
const userInputPassword = 'myPasswordIsSafeNow';

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