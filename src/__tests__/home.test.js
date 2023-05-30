import HOMEPAGE_COPY from 'configs/homepage.json';
// import { Home, EXAMPLE_QUERIES } from 'src/pages/index.tsx';
import Home from 'src/pages/index';
import { render, screen, fireEvent } from '@testing-library/react';

// jest.mock('next/router', () => require('next-router-mock'));
jest.mock('react-query', () => {
  const original = jest.requireActual('react-query');

  return {
    ...original,
    useQuery: () => ({ isLoading: false, error: false, data: [] }),
  };
});

// Check if heading, subheading, and description are rendered on the page and match the config content.
describe('Home Page', () => {
  test('renders heading, subheading, and description', () => {
    const { getByText } = render(<Home />);
    Object.keys(HOMEPAGE_COPY.sections.hero).forEach(section => {
      // [TO DO] check that element is a heading type if heading or subtitle
      expect(
        getByText(HOMEPAGE_COPY.sections.hero[section]),
      ).toBeInTheDocument();
    });
  });

  // Check if links match the config content.
  it('renders links', () => {
    render(<Home />);
    const links = [];
    Object.entries(HOMEPAGE_COPY.sections).forEach(([section, properties]) => {
      if ('routes' in properties) {
        links.push(...properties.routes);
      }
    });

    links.forEach(({ title, path, isExternal }) => {
      const link = screen.getByRole('link', { name: title });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', path);
      expect(link).toHaveAttribute('target', isExternal ? '_blank' : '_self');
    });
  });
});

// Check if links in config are rendered on the page and have the right href (and are target blank).

// [Search bar]:
// Check if search bar is rendered on the page.

// Check if search bar placeholder text matches expectation.

// Check if search bar button is rendered on the page.

// Check that clicking on the search bar button redirects to the expected link.

// [Search history]:
// Check that toggling search history works.

// Check that clicking on a search history item redirects to the expected link.

// [Advanced search]:
// Check that clicking on the advanced search button redirects to the expected link.

// links for sample queries
