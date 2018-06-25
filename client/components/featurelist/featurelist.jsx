Featurelist = React.createClass({
    features: [
        {
            icon: "fa fa-image fa-2x",
            bigtext: "See photos and updates",
            littletext: "from friends in News Feed"
        },
        {
            icon: "fa fa-share fa-2x",
            bigtext: "Share what\'s new",
            littletext: "in your life on your Timeline"
        },
        {
            icon: "fa fa-search fa-2x",
            bigtext: "Find more",
            littletext: "of what you\'re looking for with Fakebook search"
        }
    ],
    render(){
        var rows = this.features.map(function (feature) {
            return (
                <li key={feature.icon}>
                    <h3 className="btn-btn-lg">
                        <i className={feature.icon}></i>
                                <span>
                                    <strong> {feature.bigtext}</strong>
                                    <small> {feature.littletext}</small>
                                </span>
                    </h3>

                </li>
            )
        });
        return (
            <div>
                <h2 className="col-md-11 featurelist hidden-xs">
                    Connecte toi avec tes amis, et viens rejoindre une communautée de développeur
                </h2>
                <ul className="ds-btn hidden-xs">
                    {rows}
                </ul>
            </div>
        )
    }
});
