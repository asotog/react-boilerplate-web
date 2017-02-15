import React from 'react';

export default class ContactComponent extends React.Component {
    static defaultProps = {
        formDisabled: false
    }
    
    render() {
        const {formDisabled} = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" className="form-control" name="email" placeholder="Email" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="full-name">Full Name</label>
                    <input type="text" className="form-control" name="full-name" placeholder="Full Name" required/>
                </div>
                <button disabled={formDisabled} type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}