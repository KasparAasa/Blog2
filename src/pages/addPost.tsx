import {Layout} from '@/components/Layout'
import {useState} from 'react'
import {BlogPostInterface} from '@/interfaces/BlogPost'
import * as Yup from 'yup'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import {kebabCase} from "tiny-case"
import { v4 as uuidv4 } from 'uuid'

// const validate = (values: any) => { // function validate(values: any) {}
//   const errors: any = {}
//   if (!values.title) {
//     errors.title = 'Required'
//   } else if (values.title.length > 20) {
//     errors.title = 'Must be 20 characters or less'
//   }
//
//   if (!values.content) {
//     errors.content = 'Required'
//   }
// }


export default function AddPost() {
  const [blogPosts, setBlogPosts] = useState<BlogPostInterface[]>([])

  return (
    <Layout>
      <div className={''}>
        <Formik
          initialValues={{
            title: '',
            content: '',
            id: '',
            slug: '',
            date: '',
          }}
          validationSchema={Yup.object({
            title: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required(`Title is required`),
            content: Yup.string()
              .required('Content is required'),
          })}
          onSubmit={(values) => {

            const newList = [
              ...blogPosts,
              {
                title: values.title,
                content: values.content,
                id: uuidv4(),
                slug: kebabCase(values.title),
                date:'',
              }
            ]
            setBlogPosts(newList)
          }}
        >
          <Form className={'flex flex-col gap-3'}>
            <label htmlFor={'title'}>Title</label>
            <Field
              className={'border-1 rounded shadow border-slate-400'}
              name={'title'}
              type={'text'}/>
            <ErrorMessage name={'title'}/>

            <label htmlFor={'content'} className={'mt-5'}>Content</label>
            <Field
              className={'border-1 border-slate-400 rounded shadow h-28'}
              name={'content'}
              as={'textarea'}/>
            <ErrorMessage name={'content'}/>

            <button type={'submit'}>Submit</button>
          </Form>
        </Formik>
      </div>
      <div>
        {blogPosts.map(post =>
          <div>
            <div>{post.title}</div>
            <div>{post.content}</div>
          </div>
        )}
      </div>
    </Layout>
  )
}