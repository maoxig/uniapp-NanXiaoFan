from PIL import Image

def replace_background(image_path):
    # 打开原始图片
    image = Image.open(image_path)

    # 创建一个新的白色背景图片
    new_image = Image.new("RGB", image.size, (255, 255, 255))
    
    # 将原始图片粘贴到新图片上
    new_image.paste(image, (0, 0), mask=image.split()[3])

    # 保存替换背景后的图片
    new_image.save("log.png")

# 指定原始图片的路径
image_path = "log.png"

# 调用函数替换背景
replace_background(image_path)