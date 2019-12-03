import React from 'react';

class GuestCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.handleCreateGuest = this.handleCreateGuest.bind(this);
    }

    handleCreateGuest(event) {
        event.preventDefault();
        const newGuest = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            age: event.target.age.value
        };
        this.props.onCreateGuest(newGuest);
    }

    render() { 
        return (  
            <div className="guest-create-form">
                <form onSubmit={this.handleCreateGuest}>
                    <div className={"guest-create-form-element"}>
                        <p>First Name</p>
                        <input type="text" name="firstName" />
                    </div>
                    <div className={"guest-create-form-element"}>
                        <p>Last Name</p>
                        <input type="text" name="lastName" />
                    </div>
                    <div className={"guest-create-form-age"}>
                        <p>Age</p>
                        <input type="number" min="18" max="120" name="age" />
                    </div>
                    <div className={"booking-form__submit"}>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        );
    }
}
 
export default GuestCreateForm;