import { Fragment, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoute, privateRoute } from './Routes';
import { DefaultLayout } from './Components/Layout';
import { AuthContext } from './Store/Context/AuthContext';
import Error from './Pages/Error/Error';
function App() {
    const { authState } = useContext(AuthContext);
    return (
        <Router>
            <Routes>
                {publicRoute.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
                {privateRoute.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }
                    if (authState.roleUser === '[ROLE_ADMIN]') {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    } else {
                        return (
                            <Route key="error" path="*" element={<Error />} />
                        );
                    }
                })}
            </Routes>
        </Router>
    );
}

export default App;
