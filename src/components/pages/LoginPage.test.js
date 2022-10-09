import { fireEvent, render,screen,waitFor } from "@testing-library/react"
import LoginPage from "./LoginPage"
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom'






jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (jest.fn())
  }));
  const initialState = {
    auth:{
        currentUser: null,
        status: 'failed',

    }
    
  };
const mockStore = configureStore();
const store= mockStore(initialState);

test("email input should be rendered",()=>{
    

    render(<Provider store={store}><LoginPage/></Provider>)
    const emailInput = screen.getByPlaceholderText("Enter your email");
    expect(emailInput).toBeInTheDocument()
})

test("password input should be rendered",()=>{
    render(<Provider store={store}><LoginPage/></Provider>)
    const passwordInput = screen.getByPlaceholderText("Enter your password");
    expect(passwordInput).toBeInTheDocument()
})

test("logn button should be rendered",()=>{
    
    render(<Provider store={store}><LoginPage/></Provider>)
    const loginButton = screen.getByRole('button', {
        name: /login/i
      })
      
    expect(loginButton).toBeInTheDocument()
})

test("email input should accept text", ()=>{
  render(<Provider store={store}><LoginPage/></Provider>)
    const emailInput = screen.getByPlaceholderText("Enter your email");
    expect(emailInput.value).toMatch("");
    fireEvent.change(emailInput,{target:{value:"testing"}})
    expect(emailInput.value).toMatch("testing")
})

test("password input should accept text", ()=>{
  render(<Provider store={store}><LoginPage/></Provider>)
    const passwordInput = screen.getByPlaceholderText("Enter your password");
    expect(passwordInput.value).toMatch("");
    fireEvent.change(passwordInput,{target:{value:"testing"}})
    expect(passwordInput.value).toMatch("testing")
})

test("can't submit with invalid email",async()=>{
  render(<Provider store={store}><LoginPage /></Provider>)

    const loginButton = screen.getByRole('button', {
        name: /login/i
      })
      fireEvent.click(loginButton)
      const errorMessage = await screen.findByText(/Incorrect email or password!/i);
      await waitFor(() => {
        expect(errorMessage).toBeInTheDocument()
      });
    
      ;
})



