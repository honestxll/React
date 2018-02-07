import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';
import 'semantic-ui/dist/semantic.min.css';

// 如果你想要给这个组件添加生命周期的话
// 那么不要使用函数式组件
class Home extends React.Component {
  componentDidMount() {
    console.log('Home did mount');
  }

  componentWillReceiveProps() {
    console.log('App will receive props');
  }

  componentDidUpdate() {
    console.log('App did update');
  }

  componentWillUnmount() {
    console.log('Home will unMount');
  }

  render() {
    return (
      <div>
        <h2>首页</h2>
        <div className="ui piled segment">Home Page</div>
      </div>
    )
  }
}

const About = (props) => {
  console.log(props);
  return (
    <div>
      <h2>关于</h2>
      <div className="ui positive segment">关于我们</div>
      <Link to="/auth">查看个人信息，因为现在没有授权，所以点击会跳转回首页。</Link>
    </div>
  )
}

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)


const Topics = ({match}) => (
  <div>
    <h2>主题</h2>
    <ul>
      <li>
        <Link to={`${match.url}/React`}>React</Link>
      </li>
      <li>
        <Link to={`${match.url}/Vue`}>Vue</Link>
      </li>
      <li>
        <Link to={`${match.url}/Angular`}>Angular</Link>
      </li>
    </ul>
    <Route path={`${match.url}/:topicId`} component={Topic}></Route>
  </div>
)

const AuthPage = () => (
  <div className="ui button">Auth Page</div>
)

const auth = false;

const NoMatch = ({ location }) => (
  <div className="ui negative message">No Match for route {location.pathname}</div>
)

const BasicExample = () => (
  <Router>
    <div className="ui container">
      <div className="ui secondary pointing menu">
        <div className="item">csx10</div>
        <NavLink exact className="item" to="/">首页</NavLink>
        <NavLink className="item" to={{
          pathname: '/about',
          search: '?orderBy=date'
        }}>关于</NavLink>
        <NavLink className="item" to="/topics">主题</NavLink>
      </div>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
        <Route path="/auth" render={()=>(
          auth ? (
            <AuthPage />
          ) : (
            <Redirect to="/"/>
          )
        )}></Route>
        <Route component={NoMatch}></Route>
      </Switch>
    </div>
  </Router>
)

export default BasicExample
