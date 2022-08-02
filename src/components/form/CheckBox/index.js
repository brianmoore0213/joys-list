import styled from 'styled-components';
import { mdiCheck } from '@mdi/js';
import { Icon } from '@mdi/react';

function CheckBox({ onChange, name, label, value }) {
    return (
        <Wrapper>
            <div className="container">
                <button
                    className={`check-box ${value ? 'checked' : ''}`}
                    onClick={e => {
                        e.preventDefault();
                        onChange(name, !value);
                    }}
                >
                    {value && <Icon path={mdiCheck} size="100%" color="#fff" />}
                </button>
            </div>
            <label>{label}</label>
        </Wrapper>
    );
}

export default CheckBox;

const Wrapper = styled.div`
    float: left;

    label {
        float: left;
        margin: 0 0 0 1rem;
        height: 2rem;
        line-height: 2rem;
    }

    .container {
        float: left;
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;

        .check-box {
            background: var(--white);
            margin: 0;
            padding: 0;
            width: 1.25rem;
            height: 1.25rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;

            &.checked {
                background: var(--teal-500);
            }
        }
    }
`;