import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';

import styles from './login.module.scss';

import { AuthContext } from '../../../Store/Context/AuthContext.js';

const cx = classNames.bind(styles);

const Login = () => {
    const history = useNavigate();
    const { loginUser } = useContext(AuthContext);

    const [loginForm, setFormLogin] = useState({
        email: '',
        password: '',
    });

    const { email, password } = loginForm;

    const onChangeForm = (e) => {
        setFormLogin({ ...loginForm, [e.target.name]: e.target.value });
    };

    const login = async (e) => {
        e.preventDefault();
        try {
            const loginData = await loginUser(loginForm);
            if (loginData.success) {
                history('/dashboard');
            } else {
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={cx('form-Login')}>
            <div className={cx('color')}></div>
            <div className={cx('color')}></div>
            <div className={cx('color')}></div>
            <div className={cx('box')}>
                <div className={cx('box--square')}></div>
                <div className={cx('box--square')}></div>
                <div className={cx('box--square')}></div>
                <div className={cx('box--square')}></div>
                <div className={cx('Container')}>
                    <div className={cx('form')}>
                        <h2>Đăng nhập</h2>
                        <form action="">
                            <div className={cx('inputBox')}>
                                <input
                                    type="text"
                                    placeholder="Tên đăng nhập"
                                    name="email"
                                    value={email}
                                    onChange={onChangeForm}
                                />
                            </div>
                            <div className={cx('inputBox')}>
                                <input
                                    type="text"
                                    placeholder="Mật khẩu"
                                    name="password"
                                    value={password}
                                    onChange={onChangeForm}
                                />
                            </div>
                            <div className={cx('inputBox')}>
                                <input
                                    onClick={login}
                                    type="submit"
                                    value="Đăng nhập"
                                />
                            </div>
                            {/* <p className={cx('forget')}>
                                Quên mật khẩu ? <a href="google.com">Click</a>
                            </p> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
