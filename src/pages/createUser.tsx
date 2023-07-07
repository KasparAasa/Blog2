import {Layout} from "@/components/Layout";
import {observer} from "mobx-react";
import {useStore} from "@/stores/store";
import {Formik, Field, Form} from 'formik'


  const CreateUser = observer(() => {
    const {userStore} = useStore()

  return (
    <Layout>
      <Formik
        initialValues={{
          name: '',
          email: '',
          blogName: '',
          personDescription: '',
          blogDescription: '',
        }}
        onSubmit={(values) => {
          userStore.addUser({
            name: values.name,
            email: values.email,
            blogName: values.blogName,
            personDescription: values.personDescription,
            blogDescription: values.blogDescription,
          })
        }}
      >
        <div className={'m-5 flex flex-col'}>

      <Form className={'flex flex-col m-2'}>
        <div className={'text-2xl mb-4'}>User creation</div>
        <div className={'mb-5'}>Here you can add information about yourself that will be displayed on the front page.
        </div>

        <label htmlFor={'name'}>Your name</label>
        <Field name={'name'} type={'text'} className={'w-56 mt-3 mb-6 rounded shadow py-2 px-3'}/>

        <label htmlFor={'email'}>Email</label>
        <Field name={'email'} type={'text'} className={'w-56 mt-3 mb-6 rounded shadow py-2 px-3'}/>

        <label htmlFor={'blogName'}>Name of the blog</label>
        <Field name={'blogName'} type={'text'} className={'w-56 mt-3 mb-6 rounded shadow py-2 px-3'}/>

        <label htmlFor={'personDescription'}>Describe yourself with a few sentences</label>
        <Field name={'personDescription'} as={'textarea'} type={'text'} className={'h-40 mt-3 mb-6 rounded shadow py-2 px-3 whitespace-pre-wrap'}/>

        <label htmlFor={'blogDescription'}>Here you can describe the content of your blog</label>
        <Field name={'blogDescription'} as={'textarea'} type={'text'} className={'h-40 mt-3 mb-6 rounded shadow py-2 px-3'}/>

        <div className={'flex justify-center gap-5 mt-4'}>
          <button type={'reset'} className={'border-2 border-slate-300 rounded mt-3 w-32 h-12 bg-slate-300 m-2'}>Reset all fields</button>
          <button type={'submit'} className={'border-2 border-slate-300 rounded mt-3 w-32 h-12 bg-slate-300 m-2'}>Save</button>
        </div>

      </Form>
        </div>

      </Formik>
    </Layout>
  )
})

export default CreateUser