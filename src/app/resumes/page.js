import Header from '@/components/header/index'
import MyResumes from '@/components/myresumes'
export default function ResumePage() {
  const resumes = [{
    position: 'Менеджер по продажам',
    createdAt: '25.12.2023г',
    stats: {
      views: 0,
      applies: 0,
      show: 0
    }
  },
  {
    position: 'Менеджер по продажам',
    createdAt: '25.12.2023г',
    stats: {
      views: 0,
      applies: 0,
      show: 0
    }
  },
  {
    position: 'Менеджер по продажам',
    createdAt: '25.12.2023г',
    stats: {
      views: 20,
      applies: 30,
      show: 40
    }
  },];
  return (
    <main>
      <Header />
      <div className='container'>
        <div  className='flex flex-ai-c flex-jc-sb ptb7'>
            <h1>Мои Резюме</h1>
            <button className='button button-secondary-bordered'>Создать резюме</button>
        </div>

        <MyResumes resumes={resumes}/>
      </div>
    </main>
  )
}
