import Routers from './Route';
import AnimationThemeProvider from './_helper/AnimationTheme/AnimationThemeProvider';
import ChartistProvider from './_helper/Chartist/ChartistProvider';
import CustomizerProvider from './_helper/Customizer/CustomizerProvider';
import GoogleChartProvider from './_helper/GoogleChart/GoogleChartProvider';
import ChartjsProvider from './_helper/Chartjs/ChartProvider';
import TableProvider from './_helper/Table/TableProvider';
import ProjectProvider from './_helper/Project/ProjectProvider';
import ChatProvider from './_helper/Chat/ChatProvider';
import EmailProvider from './_helper/Email/EmailProvider';
import WishListProvider from './_helper/Ecommerce/Wishlist/WishlistProvider';
import ProductProvider from './_helper/Ecommerce/Product/ProductProvider';
import FilterProvider from './_helper/Ecommerce/Filter/FilterProvider';
import CartProvider from './_helper/Ecommerce/Cart/CartProvider';
import ContactProvider from './_helper/Contact/ContactProvider';
import KanbanProvider from './_helper/Kanban/KanbanProvider';
import BookmarkProvider from './_helper/Bookmark/BookmarkProvider';
import TaskProvider from './_helper/Task/TaskProvider';
import TodoProvider from './_helper/Todo/TodoProvider';
import SearchResultProvider from './_helper/SearchResult/SearchResult';
import GalleryProvider from './_helper/Gallery/GalleryProvider';
import JobSearchProvider from './_helper/JobSearch/JobSearchProvider';
import LearningProvider from './_helper/Learning/LearningProvider';
import FaqProvider from './_helper/Faq/FaqProvider';
import { ToastContainer } from 'react-toastify';
import { Provider } from "react-redux";
import store  from './redux/store';

const App = () => {
  return (
    <>
        <Provider store={store}>
            <AnimationThemeProvider>
              <CustomizerProvider>
                <GoogleChartProvider>
                  <ChartistProvider>
                    <ChartjsProvider>
                      <TableProvider>
                        <ProjectProvider>
                          <ChatProvider>
                            <EmailProvider>
                              <CartProvider>
                                <FilterProvider>
                                  <ProductProvider>
                                    <WishListProvider>
                                      <ContactProvider>
                                        <KanbanProvider>
                                          <BookmarkProvider>
                                            <TaskProvider>
                                              <TodoProvider>
                                                <SearchResultProvider>
                                                  <GalleryProvider>
                                                    <JobSearchProvider>
                                                      <LearningProvider>
                                                        <FaqProvider>
                                                          <Routers />
                                                        </FaqProvider>
                                                      </LearningProvider>
                                                    </JobSearchProvider>
                                                  </GalleryProvider>
                                                </SearchResultProvider>
                                              </TodoProvider>
                                            </TaskProvider>
                                          </BookmarkProvider>
                                        </KanbanProvider>
                                      </ContactProvider >
                                    </WishListProvider >
                                  </ProductProvider >
                                </FilterProvider >
                              </CartProvider >
                            </EmailProvider >
                          </ChatProvider >
                        </ProjectProvider >
                      </TableProvider >
                    </ChartjsProvider >
                  </ChartistProvider >
                </GoogleChartProvider >
              </CustomizerProvider >
            </AnimationThemeProvider >
            <ToastContainer />
        </Provider>
    </>
  )
}
  ;

export default App;
