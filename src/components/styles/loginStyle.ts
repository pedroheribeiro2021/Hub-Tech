import styled from "styled-components";

export const LoginStyle = styled.section`

    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        margin-bottom: 20px;
    }

    form {

        max-width: 370px;

        h3 {
            text-align: center;
            
            padding: 33px 0 22px;
        }

        label {
            padding: 15px;
        }

        input {
            margin: 0 auto;
            padding-left: 10px;
            width: 90%;
        }

        img {
            height: 10px;
            width: 17px;
            position: relative;
            left: 90%;
            bottom: 6%;
            cursor: pointer;
        }

        button {
            margin: 20px auto;
            width: 90%;
        }

        span {
            text-align: center;
        }

        a {
            border-radius: 4px;
            text-align: center;
            padding: 8px 0;
            margin: 18px auto 30px;
            height: 38px;
            width: 90%;
            background-color: var(--gray1)
        }
    }

` 