import {Layout} from '@/components/Layout'
import {useFormik} from 'formik'
import {useState} from 'react'
import {BlogPostInterface} from '@/interfaces/BlogPost'
import * as Yup from 'yup'
import {Formik, Field, Form, ErrorMessage} from 'formik'

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

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      id: '',
      slug: '',
      date: '',
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      content: Yup.string()
        .required('Required'),
    }),
    onSubmit: values => {
      setBlogPosts({
        title: values.title,
        content: values.content,
        id: '',
        slug: '',
        date: '',
      })
    },
  })

  const [blogPosts, setBlogPosts] =
    useState<BlogPostInterface>({
      title: '',
      content: '',
      id: '',
      slug: '',
      date: '',
    })

  return (
    <Layout>
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
            .required('Required'),
          content: Yup.string()
            .required('Required'),
        })}
        onSubmit={(values) => {
          setBlogPosts({
            title: values.title,
            content: values.content,
            id: '',
            slug: '',
            date: '',
          })
        }}
      >

          <Form>
            <label htmlFor={'title'}>Title</label>
            <Field name={'title'} type={'text'}/>
            <ErrorMessage name={'title'}/>

            <label htmlFor={'content'}>Content</label>
            <Field name={'content'} type={'text'}/>
            <ErrorMessage name={'content'}/>

            <button type={'submit'}>Submit</button>
          </Form>
      </Formik>
    </Layout>
  )
}