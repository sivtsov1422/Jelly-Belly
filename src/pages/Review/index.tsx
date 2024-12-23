import { SubmitHandler, useForm } from "react-hook-form";
import styled from "./Review.module.css"

type FormType = {
  name: string;
  email: string;
  category: string;
};

const Review = () => {
  const { register, handleSubmit, formState: {errors} } = useForm<FormType>();
  console.log(errors);

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styled.form}>
      <h1>Оставить отзыв</h1>
      <label className={styled.lableName}>
        Имя{" "}
        <input
          type="text"
          {...register("name", {
            required: {
              value:true,
              message: "Обязательное поле"
            },
            minLength: {
              value: 3,
              message: "В поле с именем не достаточно символов",
            },
          })}
        />
      {errors.name && <p>{errors.name.message}</p>}
      </label>


      <label className={styled.lableEmail}>
        Email <input type="email" {...register("email")} />
      </label>
      <label>
        Комментарий
        <br />
        <textarea className={styled.textarea}/>
      </label>
      <input type="submit" className={styled.btn}/>
    </form>
  );
};
export default Review;
