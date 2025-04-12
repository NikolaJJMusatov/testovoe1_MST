import './App.css'
import { AppHeader } from './components/app-header'
import { ArticleContent } from './components/article-content';
import { List } from './components/list';
import { Item } from './components/item';
import { Button } from './components/button';
import { Form } from './components/form'
import { AppFooter } from './components/app-footer';

function App() {
 
  return (
    <>
      <AppHeader className='header__list'/>
      <section className='sectionContent_1'>
        <ArticleContent title='PowerCore 360'>
        <p className='sectionContent_1__text'>PowerCore 360 is a high-intensity functional training program designed to build strength, boost endurance, and enhance core stability.</p>
          <List className='sectionContent_1__list'>
            <Item
              itemText='improvement in overall muscular strength'
              itemNumber='+40%'
              className='sectionContent_1__item'>
            </Item>
            <Item
              itemText='increase in cardiovascular performance'
              itemNumber='+35%'
              className='sectionContent_1__item'>
            </Item>
            <Item
              itemText='enhancement in core strength and balance'
              itemNumber='+50%'
              className='sectionContent_1__item'>
            </Item>
          </List>
          <Button title='Order' color='white' className='sectionContent_1__button'/>
        </ArticleContent>
        <div className='sectionContent_1__container_img'>
          <img className='sectionContent_1__img' src='img_1.png' alt='спортсмен приседает со штангой'/>
        </div>
      </section>
      <section className='sectionContent_2'>
        <div className='sectionContent_2__container_img'>
          <img className='sectionContent_2__img' src='img_2.png' alt='спортивный инвентарь для тренажерного зала'/>
        </div>
        <article className='sectionContent_2__container'>
          <List className='sectionContent_2__list'>
            <Item
              itemText='Unlike typical programs that isolate muscle groups, PowerCore 360 targets your entire body in every session, ensuring balanced development and real-life functional strength.'
              className='sectionContent_2__item'>
            </Item>
            <Item
              itemText='Each workout is built on proven principles of progressive overload and periodization, helping you avoid plateaus and maximize long-term results.'
              className='sectionContent_2__item'>
            </Item>
            <Item
              itemText='Designed to deliver maximum results in just 45 minutes per session, PowerCore 360 fits into even the busiest schedules without sacrificing effectiveness.'
              className='sectionContent_2__item'>
            </Item>
            <Item
              itemText='Core stability is integrated into every movement, improving posture, reducing injury risk, and enhancing performance in both training and everyday life'
              className='sectionContent_2__item'>
            </Item>
          </List>
          <Button title='Order' color='white' className='sectionContent_2__button'/>
        </article>
        <div className='sectionContent_2__container_img'>
          <img className='sectionContent_2__img' src='img_3.png' alt='бодибилдер'/>
        </div>
      </section>
      <section className='sectionContent_3'>
        <div className='sectionContent_3__container'>
          <article className='sectionContent_3__container-form'>
            <h2 className='sectionContent_3__title'>Register and get a discount</h2>
            <Form className='sectionContent_3__form'/>
          </article>
          <div className='sectionContent_3__container_img'>
            <img className='sectionContent_3__img' src='img_4.png' alt='фитнес девушка'/>
          </div>
        </div>
      </section>
      <AppFooter/>
    </>
  )
}

export default App
