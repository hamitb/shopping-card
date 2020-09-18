import Category from '../src/Category';

describe('category', () => {
    test('should correctly initalize', () => {
        const category = new Category('Computers');

        expect(category.title).toBe('Computers');
    });

    test('should optionally support parent category', () => {
        const parentCategory = new Category('Parent');
        const childCategory = new Category('Child', parentCategory);

        expect(childCategory.parent).toBe(parentCategory);
        expect(parentCategory.parent).toBeUndefined();
    });

    test('should use setters', () => {
        const category = new Category('Foo');

        category.title = 'Bar';

        expect(category.title).toBe('Bar');
    });
})
