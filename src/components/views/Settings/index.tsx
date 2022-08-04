import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getSettings, updateSettings } from '../../../api';
import { InputValue } from '../../../interfaces/input';
import { ISettings } from '../../../interfaces/settings';
import { CheckBox, Input } from '../../form';
import { Button } from '../../interactive';

function Settings() {
    const navigate = useNavigate();
    const [settings, setSettings] = useState<ISettings | null>(null);

    useEffect(() => {
        setSettings(getSettings());
    }, []);

    const _onCancel = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        navigate(-1);
    };

    const _onChange = (name: string, value: InputValue) => {
        setSettings(prevState => {
            if (prevState) {
                return { ...prevState, [name]: value };
            }
            return null;
        });
    };

    const _onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            updateSettings(settings as ISettings);
            navigate(-1);
        } catch (e: any | unknown) {
            alert(e.message);
        }
    };

    if (settings === null) {
        return (
            <Wrapper>
                <h1>Settings</h1>
                <p>Loading...</p>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <h1>Settings</h1>
            <form onSubmit={_onSubmit}>
                <div>
                    <Input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        onChange={_onChange}
                        value={settings.firstName}
                    />
                    <CheckBox
                        name="darkMode"
                        label="Dark Mode"
                        onChange={_onChange}
                        value={settings.darkMode}
                    />
                </div>
                <div>
                    <Button onClick={_onCancel}>Cancel</Button>
                    <Button>Save</Button>
                </div>
            </form>
        </Wrapper>
    );
}

export default Settings;

const Wrapper = styled.section``;
