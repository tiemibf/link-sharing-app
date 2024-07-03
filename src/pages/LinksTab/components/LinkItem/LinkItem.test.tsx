import { render, screen } from '@testing-library/react'
import { Wrapper } from '../../../../tests/Wrapper'
import { LinkItem } from "./LinkItem"

describe('LinkItem', () => {
    it('should render', () => {
        render(<LinkItem index={0} removeItem={() => { }} />, { wrapper: Wrapper })

        expect(screen.getByText('Link')).toBeInTheDocument()
    })
})