Signupform = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData(){
        let data = {};
        data.currentUser = Meteor.user();
        return data;
    },
    getInitialState(){
        return {
            message: '',
            messageClass: 'hidden'
        }
    },
    displayError(message){
        this.setState({message: message, messageClass: 'alert alert-danger registerError'});
    },
    handleSubmit(e){
        e.preventDefault();
        this.setState({message: '', messageClass: 'hidden'});
        var that = this;
        var first_name = ReactDOM.findDOMNode(this.refs.first_name).value.trim();
        var last_name = ReactDOM.findDOMNode(this.refs.last_name).value.trim();
        var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
        var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        var user = {
            email: email,
            password: password,
            profile: {
                fullname: (first_name + last_name).toLowerCase(),
                firstname: first_name,
                lastname: last_name,
                avatar: 'http://placehold.it/150x150',
                friends: []
            }
        };
        Accounts.createUser(user, function (e) {

            if (e) {
                that.displayError(e.reason);
            } else {
                FlowRouter.go('/dashboard');
            }
        })


    },
    render(){
        return (
            <div className="row">
                <div className="signup">
                    <h1>Inscris Toi</h1>
                    <p className="text-muted">C'est gratuit profite de nos fonctionnalité.</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="col-sm-9">
                        <div className="row">
                            <div className="col-sm-6 form-group">
                                <input ref="first_name" type="text" placeholder="Prénom"
                                       className="form-control"/>
                            </div>
                            <div className="col-sm-6 form-group">
                                <input ref="last_name" type="text" placeholder="Noms de Famille"
                                       className="form-control"/>
                            </div>
                        </div>


                        <div className="form-group">
                            <input type="text" placeholder="Votre email ou votre numéro mobile" ref="email"
                                   className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Votre mots de passe" ref="password"
                                   className="form-control"/>
                        </div>
                        <button type="submit" className="btn btn-md btn-success">Je m'inscris</button>
                        <span className={this.state.messageClass}>{this.state.message}</span>

                    </div>
                </form>
            </div>
        )
    }
});
