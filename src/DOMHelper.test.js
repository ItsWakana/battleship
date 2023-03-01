import { DOMHelperCreation } from "./DOMHelper";

describe('InitializeCaptainPicker', () => {

    const DOMHelper = DOMHelperCreation();

    const mockCallback = jest.fn();

    const mockCreateCaptains = jest.fn()
    const mockCaptainContainer = {
        append: jest.fn()
    };

    const mockMainTopContainer = {
        append: jest.fn()
    };

    test('appends correct elements', () => {

        DOMHelper.initializeCaptainPicker(mockCallback);

        expect(mockMainTopContainer.append).toHaveBeenCalledWith(mockCaptainContainer);
        expect(mockCreateCaptains).toHaveBeenCalledWith(mockCallback);

    });
});