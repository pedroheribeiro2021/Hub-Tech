import styled from "styled-components";

export const DashboardStyle = styled.section`

    header {
        width: 90%;
        margin: 55px auto 38px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
            background-color: var(--gray3);
            color: white;
            border: none;
            border-radius: 4px;
            width: 80px;
            height: 30px;
        }
    }

    .techs {

        width: 90%;
        margin: auto;

        div {
            display: flex;
            justify-content: space-between;
            margin: 20px auto;

            button {
                background-color: var(--gray3);
                color: white;
                height: 32px;
                width: 32px;
                border: none;
                border-radius: 4px;
            }
        }
    }

    .apresentation {
        padding: 0 18.75px;
        border-top: var(--gray3) 2px solid;
        border-bottom: var(--gray3) 2px solid;;
        height: 131px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
    }

    h3 {
        font-size: 18px;
    }

    ul {
        background-color: var(--gray3);
        border-radius: 4px;
        height: 300px;
        display: flex;
        flex-direction: column;

        li {
            height: 50px;
            background-color: var(--gray4);
            margin: 10px 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 10px;
            border-radius: 4px;

            img {
                display: none;
                cursor: pointer;
            }
        }
    }

    .msg {
        display: none;
    }

    @media (min-width: 400px) {

        header {
            width: 60%;
        }

        h3 {
            padding: 0 20%;
        }

        span {
            padding: 0 20%;
        }

        .techs  {

            div {
                width: 60%;

                h3 {
                    padding: 0;
                }
            }
        }

        ul {
            margin: 0 20%;

            li {
                h3 {
                    padding: 0;
                }
                img {
                    display: unset;
                }
                span {
                    padding: 0;
                }
            }
        }
        
        .msg {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: 30px;
            gap: 10px;
        }

    }

`