import styled from "styled-components";

export const RegisterStyle = styled.section`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
        width: 90%;
        margin: 55px 0 38px 0;
        display: flex;
        justify-content: space-between;
        max-width: 338px;

        a {
            background-color: var(--gray3);
            border-radius: 4px;
            width: 80px;
            height: 30px;
            text-align: center;
            padding: 5px 0 0 0;
        }
    }

    form {

        margin-bottom: 40px;
        max-width: 338px;

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

        button {
            margin: 20px auto;
            width: 90%;
        }

        span {
            text-align: center;
        }

        select {
            margin: 0 auto;
            width: 93%;
        }

        button {
            height: 38px;
            background-color: var(--color-primary-negative);
            border: none;
            border-radius: 3px;
            color: white;
        }
    }

`