import { Button } from "../../components/Button/Button"
import { Typography } from "../../components/Typography"

export const Links = () => {
    return (
        <>
            <Typography.Heading size="large">Customize your links</Typography.Heading>
            <Typography.Body>teste</Typography.Body>

            <Button width="30%" onClick={() => 'nada'}>Primary</Button>
            <Button variant='secondary' onClick={() => console.log('teste')}>Secondary</Button>
        </>
    )
}